import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  margin: auto;
`;

export const AlertWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ErrorAlertWrapper = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  background-color: rgb(253, 237, 237);
  display: flex;
  padding: 6px 16px;
  color: rgb(95, 33, 32);
  margin-bottom: 15px;
`;

export const AlertIconContainer = styled.div`
  color: #ef5350;
  margin-right: 12px;
  padding: 7px 0;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  font-size: 22px;
  opacity: 0.9;
`;

export const ErrorAlertIcon = styled.svg`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: inherit;
`;

export const ErrorAlertMessageContainer = styled.div`
  padding: 8px 0;
  min-width: 0;
  overflow: auto;
`;

export const AlertMessage = styled.div`
  margin: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  letter-spacing: 0.00938em;
  margin-bottom: 0.35em;
  font-weight: 600;
  margin-top: -2px;
`;

export const WarningAlertIcon = styled.svg`
  color: #ff9800;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: inherit;
`;

export const WarningAlertWrapper = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  background-color: rgb(255, 244, 229);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 6px 16px;
  color: rgb(102, 60, 0);
  margin-bottom: 15px;
`;

export const SuccessAlertWrapper = styled.div`
  background-color: #fff;
  color: rgba(0, 0, 0, 0.87);
  -webkit-transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  border-radius: 4px;
  box-shadow: none;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.43;
  letter-spacing: 0.01071em;
  background-color: rgb(237, 247, 237);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 6px 16px;
  color: rgb(30, 70, 32);
  margin-bottom: 15px;
`;

export const SuccessAlertIcon = styled.svg`
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 1em;
  height: 1em;
  display: inline-block;
  fill: currentColor;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  -webkit-transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  font-size: inherit;
  color: #4caf50;
`;
