import React from 'react'
import Button from 'react-bootstrap/Button'
import CodeEditor from '@uiw/react-textarea-code-editor'
import { useConfigPage } from './ConfigPage.hooks'

import styles from './ConfigPage.module.scss'

const ConfigPage: React.FC<{}> = () => {
    const {
        value,
        onChangeValue,
        handleApply,
        notValidJSON,
    } = useConfigPage()

    return (
        <>
            <div className={styles.Config}>
                <div className={styles.innerContentTop}>
                    <CodeEditor
                        value={value}
                        language="json"
                        placeholder="Please enter JSON formatted code..."
                        onChange={onChangeValue}
                        padding={15}
                        style={{
                            backgroundColor: '#f5f5f5',
                            border: `1px solid ${notValidJSON ? 'red' : 'transparent'}`,
                            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
                            fontSize: 15,
                            height: '70%',
                        }}
                    />
                    {notValidJSON && (<small style={{ color: 'red' }}>JSON code not valid. Please check your code</small>)}
                </div>
                <div className={styles.innerContentBottom}>
                    <Button variant="outline-secondary" onClick={handleApply} disabled={notValidJSON}>Apply</Button>
                </div>
            </div>
        </>
    )
}

export default ConfigPage
