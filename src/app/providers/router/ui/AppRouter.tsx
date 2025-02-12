import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

const AppRouter = () => {
    return (
        
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {/* <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} /> */}
                {Object.values(routeConfig).map(({element, path})=>{

                    return <Route 
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<div>Loading...</div>}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            
                            </Suspense>

                        )}
                    />
                })}
            </Routes>
        </Suspense>
        
    )
}

export default AppRouter