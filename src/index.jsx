/* @refresh reload */
import { render } from 'solid-js/web';

import './index.css';

function Login() {
    return (
        <div class="flex justify-center items-center w-screen h-screen bg-slate-100">
            <div class="flex flex-col px-4 justify-evenly items-center border bg-white h-72 max-w-sm">
                <div class="text-center">
                    Welcome to Notefish. Please sign-in.
                </div>
                <div class="nf-group place-self-center">
                    <input class="nf-input mb-4" placeholder="email or username" />
                    <input class="nf-input" type="password" placeholder="password" />
                    <a class="float-right text-sm my-1 text-slate-400">forgot password?</a>
                    <div class="flex justify-center w-full mt-10">
                        <button class="nf-button primary">Login</button>
                        <button class="nf-button secondary">Register</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Login />
    );
}

render(() => <App />, document.getElementById('root'));
