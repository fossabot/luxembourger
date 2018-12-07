import React from "react";
import EmptyProps from "../helper/TypeHelper";
import TextField from "@material-ui/core/TextField";
import AccountCircle from '@material-ui/icons/Search';
import InputAdornment from "@material-ui/core/InputAdornment";
import {httpHelper} from "../helper/HttpHelper";
import ElasticResponse from "../objects/ElasticResponse";

const words: string[] = ["taxi", "school", "rockhall"];

export default class AutoComplete extends React.Component<EmptyProps> {
    state = {
        searchQuery: '',
        placeholder: ''
    };

    componentDidMount(): void {
        let rand = Math.floor(Math.random() * words.length);
        console.log(rand);
        console.log(Math.random() * words.length);
        this.setState({
            placeholder: words[rand],
        });
    }

    handleChange = field => event => {
        this.setState({
            [field]: event.target.value,
        });

        let queryString: string = event.target.value;

        if(queryString.length > 2) {
            httpHelper.getJson("http://localhost/becoming/_search?q=content:\"*" + queryString + "*\"")
                .subscribe((data: ElasticResponse) => {
                    data.hits.hits
                        .forEach(value => {
                            console.log(value._source.title);
                        });

                    console.log("---------------------")
                });
        }
    };

    render() {
        return (
            <div>
                <TextField
                    id="outlined-name"
                    placeholder={this.state.placeholder}
                    value={this.state.searchQuery}
                    onChange={this.handleChange("searchQuery")}
                    margin="normal"
                    variant="standard"

                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
            </div>
        );
    }

}