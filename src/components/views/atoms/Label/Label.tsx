import React from 'react'

type LabelProps = {
    label: string
    children: React.ReactNode
}

const Label: React.FC<LabelProps> = ({ label, children }) => {
    return (
        <label>
            <span>{label}</span>
            {children}
        </label>
    )
}

export default Label
