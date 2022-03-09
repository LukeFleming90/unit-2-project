const React = require('react');
const DefaultLayout = require('./Default.jsx');

class Index extends React.Component {
    render() {
        return (
            <DefaultLayout>
                    <div>
                        <a href="/user/signup"><button>Signup</button></a>
                        <a href="/user/login"><button>Login</button></a>
                    </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index