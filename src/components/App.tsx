import React from 'react'
import { AppContextProvider } from './providers'
import { Tabs } from './views/organisms'

import '@styles/theme.scss'

const App: React.FC<{}> = () => (
    <AppContextProvider>
        <div className="wrapper">
            <p>
                &#8592;&nbsp; <a href="https://github.com/iqwik/form-builder">back to repo</a>
            </p>
            <Tabs />
        </div>
    </AppContextProvider>
)

export default React.memo(App)
