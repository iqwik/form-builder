import React from 'react'

export const replaceSingleQuotes: (value: string) => string = (value) => value.replace(/^'|(\s|\w)'|'(\s|\w)|'$/g, '$1"$2')

export const isValidJSON: (value: string) => boolean = (value) => {
    try {
        JSON.parse(value)
    } catch (e) {
        return false
    }
    
    return true
}

export const getComponent: (value: React.ComponentType, props?: object) => React.ReactElement = (Component, props = {}) => <Component {...props} />
