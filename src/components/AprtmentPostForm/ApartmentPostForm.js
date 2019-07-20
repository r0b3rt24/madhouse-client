import React, { Component } from "react";
import TextField from '@material-ui/core/TextField';

class ApartmentPostForm extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <form autoComplete="true" noValidate>
              <TextField
                required
                label="Title"
                className="title-field"
                margin="normal"
                fullWidth
              />
              <TextField
                required
                label="Subtitle"
                className="subtitle-field"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Address Line First"
                className="address-second-field"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Address Line Second"
                className="address-second-field"
                margin="normal"
                fullWidth
              />
              <TextField
                label="Detail"
                className="detail-field"
                margin="normal"
                variant="outlined"
                rows="8"
                multiline
                fullWidth
              />
            </form>
        )
    }
}

export default ApartmentPostForm