import {
  CloseOutlined,
  FileExcelOutlined,
  FilePdfOutlined,
  FileTextOutlined,
  FileWordOutlined,
} from '@ant-design/icons';
import { Image } from 'antd';
import { Tooltip } from '../components/atoms';

export const convertFileUrl = url => {
  return url?.includes('https://') ? url : `https://${url}`;
};

export const checkHeaderIcon = (type, customTitle) => (
  <Tooltip placement='top' title={customTitle || type}>
    <div>
      {
        {
          Inactive: <CloseOutlined style={{ color: '#EF3E36' }} />,
          Action: 'Action',
        }[type]
      }
    </div>
  </Tooltip>
);

export const FileIcons = ({ item }) => {
  const style = { fontSize: '25px', color: '#5F6982' };
  const object = [
    ['.pdf', <FilePdfOutlined style={style} />],
    ['.xlsx', <FileExcelOutlined style={style} />],
    [['.doc', '.docm', '.docx'], <FileWordOutlined style={style} />],
    [
      ['.jpg', '.png', '.svg'],
      <Image style={{ width: '25px', height: '25px' }} src={item?.formats?.small?.url} />,
    ],
  ];
  return object.find(k => k[0].includes(item?.ext))?.[1] || <FileTextOutlined style={style} />;
};
