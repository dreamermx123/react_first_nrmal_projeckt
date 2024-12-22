import React from "react"
import { MainPage } from "pages/MainPage"
import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"
import AboutPage from "pages/AboutPage/ui/AboutPage"
const AppRouter = () => {
    return (
        
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    {/* <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} /> */}
                {Object.values(routeConfig).map(({element, path})=>{
                    <Route 
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<div>Loading...</div>}>
                            {element}
                        </Suspense>

                    )}
                    />
                })}
                </Routes>
            </Suspense>
        
    )
}

export default AppRouter