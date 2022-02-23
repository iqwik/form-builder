import React from 'react'
import { AppContextProvider } from './providers'
import { Tabs } from './views/organisms'

import '@assets/styles/theme.scss'

const App: React.FC<{}> = () => (
	<AppContextProvider>
		<div className="wrapper">
			<Tabs />
		</div>
	</AppContextProvider>
)

export default React.memo(App)
