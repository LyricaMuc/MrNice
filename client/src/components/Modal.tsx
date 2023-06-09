import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { RxCross2 } from 'react-icons/rx'


/*
 * Types
*/
type ModalProps = {
    className?: string;
    isActive: boolean;
    children?: React.ReactNode;
    onClose: () => void;
}

/*
 * Styling
*/
const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(59, 113, 202, 0.5);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Wrapper = styled.div`
    background: #FFFFFF;
    border-radius: 5px;
    padding: 10px 10px;
    width: 500px;
    height: 500px;
`;

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CrossIcon = styled(RxCross2)`
    color: blue;
`;


const Modal: React.FC<ModalProps> = (props: ModalProps) => {
    const { className, children, onClose } = props;

    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        
        function handleOutsideClick(e: MouseEvent) {
            if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
                onClose();
            }
        }
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        }
    }, [ref])

    return (
        <Container className={className}>
            <Wrapper ref={ref}>
                <ButtonWrapper>
                <CrossIcon onClick={onClose} />
                </ButtonWrapper>
                    {children}
            </Wrapper>
        </Container>
    )
};


export default Modal;