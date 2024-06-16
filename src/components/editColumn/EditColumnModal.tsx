import React from 'react'
import Modal from '../modal/Modal'
import EditColumn from './EditColumn'

type Props = {}

const EditColumnModal = (props: Props) => {
    return (
        <Modal>
            <EditColumn />
        </Modal>
    )
}

export default EditColumnModal