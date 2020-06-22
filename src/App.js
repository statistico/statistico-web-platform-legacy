import React, { Component } from 'react';

import Toolbar from './components/Navigation/Toolbar/Toolbar';

class App extends Component {
    render() {
        return (
            <div style={{height: '100%'}}>
                <Toolbar />
                <main>
                    <p>Statistico Web Platform</p>
                </main>

            </div>
        )
    }
}

export default App;
