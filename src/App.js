import React,{ useEffect} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { 
  EcomDashboard, 
  Orders, 
  Calendar, 
  Employees, 
  Stacked,
  Pyramid,
  Customers,
  Kanban,
  AreaChart,
  BarChart,
  PieChart,
  Financial,
  ColorMapping,
  ColorPicker,
  Editor,
  Line
} from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

function App() {

  const { activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateContext();

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000'}}>
            <TooltipComponent content='Settings' position='Top'> 
              <button type='button'
                className='text-2xl p-3 
                hover:drop-shadow-xl 
                hover:bg-light-gray text-white'
                style={{ background: currentColor, borderRadius: '50%' }}
                onClick={() => setThemeSettings(true)}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
            <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
              <Navbar />
            </div>

            <div>
              
              {themeSettings && <ThemeSettings />}

              <Routes>
                {/* Dashboard */}
                <Route path='/' element={<EcomDashboard />}/>
                <Route path='/ecommerce' element={<EcomDashboard />}/>

                {/* Pages */}
                <Route path='/orders' element={<Orders />}/>
                <Route path='/employees' element={<Employees />}/>
                <Route path='/customers' element={<Customers />}/>

                {/* Apps */}
                <Route path='/kanban' element={<Kanban />}/>
                <Route path='/editor' element={<Editor />}/>
                <Route path='/calendar' element={<Calendar />}/>
                <Route path='/color-picker' element={<ColorPicker />}/>

                {/* Charts */}
                <Route path='/line' element={<Line />}/>
                <Route path='/area' element={<AreaChart />}/>
                <Route path='/bar' element={<BarChart />}/>
                <Route path='/pie' element={<PieChart />}/>
                <Route path='/financial' element={<Financial />}/>
                <Route path='/color-mapping' element={<ColorMapping />}/>
                <Route path='/pyramid' element={<Pyramid />}/>
                <Route path='/stacked' element={<Stacked />}/>
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
