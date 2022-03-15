import * as React from "react";
import {Auth} from "@testing/login/home/bridge";
import {routing} from "@beyond-js/kernel/routing/ts";

interface IForm {
    disabled?: boolean;
}

const model = new Auth();

export /*bridge*/
function Page(): JSX.Element {
    const defaultValues = {username: '', password: '', fetching: false};
    const [values, setValues] = React.useState(defaultValues);
    const [error, setError] = React.useState<String | undefined>();
    const handleChange = ({currentTarget: target}) => {
        const currentValue = {...values};
        currentValue[target.name] = target.value;
        setValues(currentValue);
    };
    const formDisabled: IForm = {};
    const {username, password} = values;
    if (!username || !password) {
        formDisabled.disabled = true;
    }

    const onSubmit = async event => {
        try {
            event.preventDefault();
            const response = await model.login(username, password);
            if (response.data?.valid) {
                routing.pushState('/welcome');
                return;
            }
            setError(response.error);
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="page__container">

            <form onSubmit={onSubmit}>
                {
                    error &&
                    <div className="form__error">
                        {error}
                    </div>
                }
                <label>User: </label>
                <input onChange={handleChange} type="text" name="username"/>
                <label>Password</label>
                <input onChange={handleChange} type="password" name="password"/>
                <div className="form__actions">
                    <button onClick={onSubmit} {...formDisabled}>Login</button>
                </div>
            </form>
        </div>
    );
}
