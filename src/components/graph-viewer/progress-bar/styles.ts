import styled from 'styled-components'

const BORDER = 6
const HEIGHT = 14

export const Container = styled.div`
  border-bottom: ${({ theme }) => theme.border};
  flex: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 7px 7px 0 0;
  padding: 7px;
`
export const WrapperBar = styled.div`
  flex: 1;
  margin: 0 5px 0 5px;
  border-radius: ${BORDER}px;
  height: ${HEIGHT}px;
  background-color: ${({ theme }) => theme.colors.foregroundAccent};
  cursor: pointer;
`
export const Bar = styled.div<{ widthPercent: number }>`
  border-radius: ${({ widthPercent }) =>
    widthPercent === 100 ? `${BORDER-2}px` : `${BORDER-2}px 0 0 ${BORDER-2}px`};
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  width: ${({ widthPercent }) => widthPercent}%;
  transition: width 0.2s;
`
export const Button = styled.button`
  background-color: transparent;
  border: none;
  margin: 0 4px;
  cursor: pointer;
  outline: none;
  display: flex;
  svg {
    color: ${({ theme }) => theme.colors.contrast};
    width: ${HEIGHT + 3}px;
    height: ${HEIGHT + 3}px;
  }
`