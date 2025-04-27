import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import {BuggyComponent, ErrorFallback} from "../HigherOrderComponent.tsx"
function RenderErrorBoundary(){
    return (
        <>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
        <BuggyComponent />
        </ErrorBoundary>        
        </>
    )
}

export default RenderErrorBoundary
