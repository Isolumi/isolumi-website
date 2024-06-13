import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home/Home.tsx';
import About from './About/About.tsx';

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
			</Routes>
		</Router>
	)
}

export default App