import {
  Form,
  Select,
  InputNumber,
  DatePicker,
  Switch,
  Slider,
  Button,
  Rate,
  Typography,
  Space,
  Divider,
} from "antd";
import styled from "styled-components";
import Sidebar from "../components/common/Sidebar";

const { Option } = Select;
const { Title } = Typography;

const StyledButton = styled(Title)`
  background-color: red;
  display: flex;
  justify-content: center;
`;
const StyledSection = styled.section`
  background-color: aqua;
`;

function Home() {
  return <Sidebar />;
}

export default Home;
