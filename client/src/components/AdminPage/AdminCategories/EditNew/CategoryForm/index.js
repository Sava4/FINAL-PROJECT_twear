import React, {useState, useEffect} from 'react';

import Grid from '@material-ui/core/Grid';
import useStyles from './useStyles';

import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';


export default props => {
    const classes = useStyles();

    const{categoryName, topCatName, item, topCatsBase, gendersBase, displayAdditional, onSubmitHandler} = props;
    console.log(item);
    const specialCategory = 'looks';

    let [formData, setFormData] = useState({});

    useEffect(()=> {
        if(categoryName) {
            let newInTopCat = categoryName && categoryName.includes('newCategory') ?
                categoryName.slice(categoryName.indexOf('-')+1) :
                undefined;
            item ?
                setFormData({
                    _id: item._id || '',
                    itemNo: item.itemNo || 0,
                    name: item.name || '',
                    topCategory: item.topCategory,
                    genders: [...item.genders],
                    img: item.img || '',
                    date: item.date || Date.now()
                }) :
                setFormData({topCategory: newInTopCat})

        } else if (topCatName && item) {
                setFormData({
                    _id: item._id || '',
                    name: item.name || '',
                    img: item.img || '',
                    date: item.date || Date.now()
                });
        }
    },[categoryName, topCatName, item]);

    const onChange = event => {
        if (event.target.name === 'genders') {
            event.target.checked ?
                setFormData({
                    ...formData,
                    genders: formData.genders ? [...formData.genders.filter(el => el.gender !== event.target.value), {gender: event.target.value}] : [{gender: event.target.value}]
                }) :
                setFormData({
                    ...formData,
                    genders: [...formData.genders.filter(el => el.gender !== event.target.value)]
                })
        } else {
            setFormData({
                ...formData,
                [event.target.name]: event.target.value
            });
        }
    };

    const onSubmit = event => {
        event.preventDefault();
        onSubmitHandler(formData);
    };

    console.log('formData: ', formData);

    gendersBase.forEach(gender => {
        formData.genders && formData.genders.includes({gender: gender._id}) ? console.log('formdData.genders: ', formData.genders) : console.log('gender: ', gender._id)
    })

    return (
        <>
            <h1> This is form for {(topCatName || categoryName.slice(0,categoryName.indexOf('-'))).toUpperCase()}</h1>
            <div className={classes.wrapper}>
                <form autoComplete="off" onSubmit={onSubmit}>
                    <Grid container className={classes.paper}>
                        <Grid item xs={4} className={classes[displayAdditional]}>
                            <TextField
                                id="outlined-required"
                                label="itemNo"
                                name='itemNo'
                                placeholder={`${Math.ceil(Math.random()*1000)}-${Math.ceil(Math.random()*100)}-${Math.ceil(Math.random()*10)}`}
                                value={formData.itemNo ? formData.itemNo : ''}
                                onChange={onChange}
                                onFocus={onChange}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item className={classes.justify}>
                            <TextField
                                required
                                id="outlined-required"
                                label="Category"
                                name='name'
                                autoFocus
                                onChange={onChange}
                                defaultValue={topCatName === 'newTopCategory' || (categoryName && categoryName.includes('newCategory')) ? '' : topCatName || categoryName}
                                className={classes.textField}
                                margin="normal"
                                variant="outlined"
                            />
                        </Grid>
                    </Grid>

                    <div className={classes[displayAdditional]}>
                        <Grid container className={classes.paper}>
                            <Grid item xs={6}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">In Top Category:</FormLabel>
                                    <RadioGroup aria-label="topCats" name="topCategory">
                                    {topCatsBase
                                        .filter(el => el.name !== specialCategory)
                                        .map(topCat =>
                                            <FormControlLabel
                                                key={topCat._id}
                                                id={topCat._id}
                                                value={topCat._id}
                                                control={<Radio />}
                                                label={topCat.name}
                                                checked={formData.topCategory && formData.topCategory === topCat._id ? true : false}
                                                onChange={onChange}
                                            />
                                        )}
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                                <FormControl component="fieldset" className={classes.formControl}>
                                    <FormLabel component="legend">Select Genders</FormLabel>
                                    <FormGroup>
                                        {gendersBase.map(gender =>
                                            <FormControlLabel
                                                key={gender._id}
                                                control={
                                                    <Checkbox
                                                        name='genders'
                                                        id={gender._id}
                                                        value={gender._id}
                                                        checked={formData.genders && formData.genders.includes({gender: gender._id}) ? true : false}
                                                        onChange={onChange}
                                                    />}
                                                label={gender.name}
                                            />
                                        )}
                                    </FormGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </div>

                    <Grid container className={classes.paper}>
                        <Grid item xs={12}>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroupFileAddon01">Upload photo</span>
                                </div>
                                <div className="custom-file">
                                    <input
                                        type="file"
                                        id="inputGroupFile01"
                                        name="img"
                                        value=""
                                        onChange={onChange}
                                        className="custom-file-input"
                                        aria-describedby="inputGroupFileAddon01"
                                    />
                                    <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                                </div>
                            </div>
                        </Grid>
                        <Grid item xs={12}>
                            <button className="btn btn-info btn-block" type="submit">Save category</button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </>
    )
}


                                    {/* following is for product form:
                                    {topCatsBase
                                    .filter(el => el.name === specialCategory)
                                    .map(topCat =>
                                        <div className="form-check"
                                            key={topCat._id}
                                        >
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                name={topCat.name}
                                                id={topCat._id}
                                                value={topCat.name}
                                                checked={topCat.name === checkedTop ? true : false}
                                                onChange={onChange}
                                            />
                                            <label className="form-check-label" htmlFor={topCat.name}>
                                            {'include to ' + topCat.name.toUpperCase() + ' collections?'}
                                            </label>
                                        </div>
                                    )} */}