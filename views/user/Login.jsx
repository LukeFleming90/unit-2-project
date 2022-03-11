const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Login extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div>
                    <form action="/user/login" method="post">
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">Email address</label>
                            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" type="text" name="username" required/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" name="password" required class="form-control" id="exampleInputPassword1"/>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" value="Login">Submit</button>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Login