import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";


import exampleImage from '/img/output.png';
import { Table } from 'antd';




export function Tables() {
  

  const columns = [
    {
      title: ' Radiomic Feature',
      dataIndex: 'feature',
      filters: [{
        text: 'Min',
        value: 'Minimum',
      },
      {
        text: 'Max',
        value: 'Maximum',
      },
      {
        text: 'Mask/Image',
        value: 'Max',
        children: [
          {
            text: 'Mask',
            value: 'Mask',
          },
          {
            text: 'Image',
            value: 'Image',
          },
        ],
      },],
      onFilter: (value, record) => record.feature.includes(value),
      sorter: (a, b) => a.feature.length - b.feature.length,
      sortDirections: ['descend'],
    },

    {
      title: 'Value (pat. 1)',
      dataIndex: 'value1',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.value1 - b.value1,
    },

    {
      title: 'Mask (pat. 1)',
      dataIndex: 'mask1',
      filters: [{
        text: 'ITV',
        value: '_ITV',
      },
      {
        text: 'PTV',
        value: 'PTV',
      },],
      onFilter: (value, record) => record.mask1.includes(value),
    },

    {
      title: 'Value (pat. 2)',
      dataIndex: 'value2',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.value2 - b.value2,
    },

    {
      title: 'Mask (pat. 2)',
      dataIndex: 'mask2',
      filters: [{
        text: 'ITV',
        value: '_ITV',
      },
      {
        text: 'PTV',
        value: 'PTV',
      },],
      onFilter: (value, record) => record.mask2.includes(value),
    },

    {
      title: 'Value (pat. 3)',
      dataIndex: 'value3',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.value3 - b.value3,
    },

    {
      title: 'Mask (pat. 3)',
      dataIndex: 'mask3',
      filters: [{
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },],
      onFilter: (value, record) => record.mask3.indexOf(value) === 0,
    },

    {
      title: 'Value (pat. 4)',
      dataIndex: 'value4',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.value4 - b.value4,
    },

    {
      title: 'Mask (pat. 4)',
      dataIndex: 'mask4',
      filters: [{
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },],
      onFilter: (value, record) => record.mask4.indexOf(value) === 0,
    },

    {
      title: 'Value (pat. 5)',
      dataIndex: 'value5',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.value5 - b.value5,
    },

    {
      title: 'Mask (pat. 5)',
      dataIndex: 'mask5',
      filters: [{
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },],
      onFilter: (value, record) => record.mask5.indexOf(value) === 0,
    },

    {
      title: 'Value (pat. 6)',
      dataIndex: 'value6',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.value6 - b.value6,
    },

    {
      title: 'Mask (pat. 6)',
      dataIndex: 'mask6',
      filters: [{
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },],
      onFilter: (value, record) => record.mask6.indexOf(value) === 0,
    },

    {
      title: 'Value (pat. 7)',
      dataIndex: 'value7',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.value7 - b.value7,
    },

    {
      title: 'Mask (pat. 7)',
      dataIndex: 'mask7',
      filters: [{
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },],
      onFilter: (value, record) => record.mask7.indexOf(value) === 0,
    },

  ];

  const data = [
    { key: '1', feature: 'diagnostic_Image-original_Mean', value1: -31310.530692338943, mask1: '1_F_MET_NT_ITV', value2: -31193.755941118514, mask2: '2_F_HCC_NT_ITV', value3: -31256.466052360534, mask3: '3_M_MET_NT_ITV', value4: -31615.138033218383	, mask4: '4_F_MET_NT_ITV', value5: -30795.507414839, mask5: '5_M_HCC_NT_ITV', value6: -31512.313879552094, mask6: '6_F_MET_NT_ITV', value7: -31130.288190121122, mask7: '7_F_MET_NT_ITV' },
    { key: '2', feature: 'diagnostic_Image-original_Minimum', value1: -32768.0, mask1: '1_F_MET_NT_PTV', value2: -32768.0, mask2: '2_F_HCC_NT_PTV', value3: -32768.0, mask3: '3_M_MET_NT_PTV', value4: -32768.0, mask4: '4_F_MET_NT_PTV', value5: -32768.0, mask5: '5_M_HCC_NT_PTV', value6: -32768.0, mask6: '6_F_MET_NT_PTV', value7: -32768.0, mask7: '7_F_MET_NT_PTV'},
    { key: '3', feature: 'diagnostic_Image-original_Maximum', value1: -1.0, mask1: '1_F_MET_NT_Liver', value2: -1.0, mask2: '2_F_HCC_NT_Liver', value3: -1.0	, mask3: '3_M_MET_NT_Liver', value4: -1.0, mask4: '4_F_MET_NT_Liver', value5: -1.0, mask5: '5_M_HCC_NT_Liver', value6: -1.0, mask6: '6_F_MET_NT_Liver', value7: -1.0, mask7: '7_F_MET_NT_Liver' },
    { key: '4', feature: 'diagnostic_Mask-original_VoxelNum', value1: 578402, mask1: '1_F_MET_NT_Liver-ITV', value2: 1299579, mask2: '2_F_HCC_NT_Liver-ITV', value3: 649397, mask3: '3_M_MET_NT_Liver-ITV', value4: 1081513, mask4: '4_F_MET_NT_Liver-ITV', value5: 804746, mask5: '5_M_HCC_NT_LiverITV', value6: 5040536, mask6: '6_F_MET_NT_LiverITV', value7: 733724, mask7: '7_F_MET_NT_LiverITV'},
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };
  
 
  return (
    <div className="mt-12 mb-8 flex flex-col gap-12">
      <Card>
        <CardHeader variant="gradient" color="pink" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            San Diego Patients Table (demo avg)
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">

        <Table columns={columns} dataSource={data} scroll={{
      x: 2200,
    }} />

        </CardBody>
      </Card>


      <Card>
        <CardHeader variant="gradient" color="pink" className="mb-8 p-6">
          <Typography variant="h6" color="white">
            Example of features (demo avg)
          </Typography>
        </CardHeader>
        <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">

        <img src={exampleImage} alt="Example" />
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;

