import { View } from "react-native";
import styled from "styled-components/native";

const TopSmall = styled.View`
  margintop: 4px;
`;

const TopMedium = styled.View`
  margintop: 8px;
`;

const TopLarge = styled.View`
  margintop: 16px;
`;

export const Spacer = ({ variant }) => {
 if(variant === "top.medium"){
    return <TopMedium />
 }
 if(variant === "top.large"){
    return <TopLarge />
 }
 return <TopSmall />
};
