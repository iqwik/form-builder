export const FIELD_TYPES = {
    BUTTON: 'button',
    CHECKBOX: 'checkbox',
    DATE: 'date',
    NUMBER: 'number',
    RADIO: 'radio',
    TEXT: 'text',
    TEXTAREA: 'textarea',
} as const

export const FIELD_TYPES_BY_VALUES = {
    [FIELD_TYPES.BUTTON]: true,
    [FIELD_TYPES.CHECKBOX]: true,
    [FIELD_TYPES.DATE]: true,
    [FIELD_TYPES.NUMBER]: true,
    [FIELD_TYPES.RADIO]: true,
    [FIELD_TYPES.TEXT]: true,
    [FIELD_TYPES.TEXTAREA]: true,
} as const

export const ACCEPTED_FIELDS_TYPES = {
    [FIELD_TYPES.CHECKBOX]: true,
    [FIELD_TYPES.DATE]: true,
    [FIELD_TYPES.NUMBER]: true,
    [FIELD_TYPES.RADIO]: true,
    [FIELD_TYPES.TEXT]: true,
    [FIELD_TYPES.TEXTAREA]: true,
} as const

export const ACCEPTED_BUTTONS_TYPES = {
    [FIELD_TYPES.BUTTON]: true,
} as const
