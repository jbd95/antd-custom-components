const IconPickerAPI = [
    {
        property: 'availableIcons',
        description: 'Icons that the user can choose from',
        type: 'string[]',
        default: 'null'
    },
    {
        property: 'default',
        description: 'Default selected icon type',
        type: 'string',
        default: 'null'
    },
    {
        property: 'placement',
        description: 'Placement of the popover component',
        type: 'string',
        default: 'bottomLeft'
    },
    {
        property: 'size',
        description: 'Size of the button',
        type: 'string',
        default: 'default'
    },
    {
        property: 'maxWidth',
        description: 'Maximum width of the container',
        type: 'number',
        default: 'unrestricted'
    },
    {
        property: 'onSelect',
        description: 'Called when an icon is selected',
        type: 'function',
        default: 'null'
    },

]
export default IconPickerAPI;