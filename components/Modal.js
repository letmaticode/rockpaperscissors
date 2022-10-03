export default function Modal({ showModal, modal }) {

    return (
        <aside className={showModal ? 'modal' : 'modal--hidden'}>
            <p className="modal__header-title">
                RULES
            </p>

            <button onClick={modal} className="modal__header-button">
                X
            </button>

            <img className="modal__img" src="/images/image-rules.svg" />
        </aside>
    )
}
