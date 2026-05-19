import { useEffect, useRef, type MouseEventHandler } from "react"
import "../stylesheets/Modal.css"

interface ModalProps {
    title: string
    ref?: React.RefObject<HTMLDivElement | null>
    width?: number
    height?: number
    bannerSrc?: string
    cancelLabel?: string
    cancelHidden?: boolean
    confirmLabel?: string
    confirmIcon?: React.ReactNode
    visible: boolean
    onClose: Function
    onCancel: Function
    onConfirm: Function
    confirmDisabled?: boolean
    children?: React.ReactNode
}

const closePath = "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"

const Modal = ({ title, height, width, bannerSrc, cancelLabel = "Cancel", cancelHidden, confirmLabel = "Confirm", confirmIcon, visible, onClose, onCancel, onConfirm, confirmDisabled, ref, children }: ModalProps) => {

    const firstItemRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (visible) {
            firstItemRef.current?.focus();
        }
    }, [visible]);

    useEffect(() => {
        const mainEl = document.querySelector("main") as HTMLElement | null;
        if (mainEl) {
            mainEl.style.overflowY = visible ? "hidden" : "auto";
        }
        return () => {
            if (mainEl) mainEl.style.overflowY = "auto";
        };
    }, [visible]);

    useEffect(() => {
        if (!visible) return;
        const handleKeyDown = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [visible, onClose]);

    if (!height) height = 30;
    if (!width) width = 80;

    return <>
        <div className={`modal-overlay ${visible ? "open" : ""}`} onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}>
            <div className={`modal ${visible ? "open" : ""}`} style={{ "height": height + "em", "width": width + "em" }} tabIndex={-1} ref={ref}>

                {bannerSrc
                    ? <div className="modal-banner" style={{ backgroundImage: `url(${bannerSrc})` }}>
                        <h1>{title}</h1>
                        <svg onClick={onClose as MouseEventHandler} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d={closePath}/>
                        </svg>
                    </div>
                    : <div className="modal-bar-top">
                        <h1>{title}</h1>
                        <svg onClick={onClose as MouseEventHandler} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d={closePath}/>
                        </svg>
                    </div>
                }

                <div className="modal-body">
                    {children}
                </div>

                <div className="modal-bar-bottom">
                    {!cancelHidden && <button type="button" className="cancel" onClick={onCancel as MouseEventHandler}>{cancelLabel}</button>}
                    <button type="button" className="confirm" onClick={onConfirm as MouseEventHandler} disabled={confirmDisabled}>{confirmIcon}{confirmLabel}</button>
                </div>
            </div>
        </div>
    </>

}

export default Modal
