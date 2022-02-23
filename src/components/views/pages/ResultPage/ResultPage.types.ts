import { FieldFactoryProps } from "@components/views/organisms/FieldFactory/FieldFactory"

export type ItemProps = FieldFactoryProps

export type ObjectValueProps = {
    items: Array<ItemProps>
    title?: string
    buttons?: Array<ItemProps
}