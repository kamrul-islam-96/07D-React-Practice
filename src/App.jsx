import { Routes, Route, Link } from 'react-router-dom'
import Day1 from './practice/Day1_MapFilter'
import Day2 from './practice/Day2_PropsDemo'
import Day3 from './practice/Day3_UseStateCounter'
import Day4 from './practice/Day4_UseEffectAPI'
import Day5 from './practice/Day5_FormHandling'
import Day6 from './practice/Day6_LiftingState'
import Day7 from './practice/Day7_RouterPractice'

export default function App() {
  const navItemstyles = {
    width: '30%',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    fontSize: '20px',
    backgroundColor: '#6e6c66',
    padding: '0 8px'
  }

  const navbarStyles = {
    width: '100%',  
    display: 'grid',
    placeItems: 'center',
    margin: '24px 0'
  }

  return (
    <div style={navbarStyles}>
      <nav style={navItemstyles}>
        <Link to="/day1">Day 1</Link> |{" "}
        <Link to="/day2">Day 2</Link> |{" "}
        <Link to="/day3">Day 3</Link> |{" "}
        <Link to="/day4">Day 4</Link> |{" "}
        <Link to="/day5">Day 5</Link> |{" "}
        <Link to="/day6">Day 6</Link> |{" "}
        <Link to="/day7">Day 7</Link> 
      </nav>
      <Routes>
        <Route path="/day1" element={<Day1 />} />
        <Route path="/day2" element={<Day2 />} />
        <Route path="/day3" element={<Day3 />} />
        <Route path="/day4" element={<Day4 />} />
        <Route path="/day5" element={<Day5 />} />
        <Route path="/day6" element={<Day6 />} />
        <Route path="/day7" element={<Day7 />} />
      </Routes>
    </div>
  )
}
