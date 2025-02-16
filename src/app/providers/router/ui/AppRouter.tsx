import { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"
import { PageLoader } from "widgets/PageLoader"

const AppRouter = () => {
    return (
        
        
            <Routes>
                {/* <Route path={'/about'} element={<AboutPage />} />
                    <Route path={'/'} element={<MainPage />} /> */}
                {Object.values(routeConfig).map(({element, path})=>{

                    return <Route 
                        key={path}
                        path={path}
                        element={(
                            <Suspense fallback={<PageLoader/>}>
                                <div className="page-wrapper">
                                    {element}
                                </div>
                            
                            </Suspense>

                        )}
                    />
                })}
            </Routes>
        
        
    )
}

export default AppRouter