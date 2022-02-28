/* eslint-disable no-useless-escape */
import React from 'react'

export const TABS_TITLES = {
    CONFIG: 'Config',
    RESULT: 'Result',
} as const

export const emptyExampleFields = '{\n  "items": [],\n  "title": "",\n  "buttons": []\n}'
export const filledExampleFields = '{\n  \"items\": [\n      { \"type\": \"number\", \"label\": \"Count\", \"placeholder\": \"choose or enter quantity...\", \"value\": 12 },\n      { \"type\": \"date\", \"label\": \"Date\", \"value\": \"2022-02-24\" },\n      { \"type\": \"text\", \"label\": \"InputText\", \"placeholder\": \"some text here...\" },\n      { \"type\": \"textarea\", \"label\": \"TextArea\", \"placeholder\": \"enter your message...\" },\n      { \"type\": \"checkbox\", \"label\": \"Checkbox1\", \"value\": \"checkbox 1\" },\n      { \"type\": \"checkbox\", \"label\": \"Checkbox2\", \"value\": \"checkbox 2\" },\n      { \"type\": \"radio\", \"name\": \"radio[]\", \"label\": \"Radio 1\", \"value\": \"Radio 1\" },\n      { \"type\": \"radio\", \"name\": \"radio[]\", \"label\": \"Radio 2\", \"value\": \"Radio 2\", \"checked\": 1 },\n      { \"type\": \"radio\", \"name\": \"radio[]\", \"label\": \"Radio 3\", \"value\": \"Radio 3\" }\n  ],\n  \"title\": \"Form Builder\",\n  \"buttons\": [\n      { \"type\": \"button\", \"label\": \"Cancel\", \"variant\": \"secondary\" },\n      { \"type\": \"button\", \"label\": \"Save\", \"variant\": \"success\" }\n  ]\n}'

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
