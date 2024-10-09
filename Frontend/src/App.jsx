import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Career from './pages/Career'
import Contact from './pages/Contact'

const App = () => {
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/career' element={<Career />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	)
}

export default App
