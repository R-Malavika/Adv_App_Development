import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Modal, message } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import './LoanStatus.css';
import NavBar1 from '../NavBar1';
import Header from './Header';

const LoanManagementTable = () => {
  const [dataSource, setDataSource] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const a = 0;
  const b = 0;

  useEffect(() => {
    fetchDataFromDatabase();
  }, []);

  const fetchDataFromDatabase = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('http://localhost:8080/services', {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setDataSource(data);
      } else {
        const errorMessage = await response.text();
        console.error(`Failed to fetch user data: ${errorMessage}`);
      }
    } catch (error) {
      console.error(`Error fetching user data: ${error.message}`);
    }
  };

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Branch',
      dataIndex: 'branch',
      key: 'branch',
    },
    {
      title: 'Mobile',
      dataIndex: 'mobile',
      key: 'mobile',
    },
    {
      title: 'Scheme',
      dataIndex: 'scheme',
      key: 'scheme',
    },
    {
      title: 'Amount',
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: 'Purpose',
      dataIndex: 'purpose',
      key: 'purpose',
    },
    {
      title: 'Pan Card',
      dataIndex: 'panNum',
      key: 'panNum',
    },
    {
      title: 'Salary',
      dataIndex: 'salary',
      key: 'salary',
    },
    {
      title: 'Aadhar No',
      dataIndex: 'aadharNo',
      key: 'aadharNo',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <Space>
          <Button type="primary" onClick={() => handleApprove(record)} style={{ backgroundColor: 'green' }}>
            Approve
          </Button>
          <Button type="danger" onClick={() => handleReject(record)} style={{ backgroundColor: 'red',color:'white'}}>
            Reject
          </Button>
        </Space>
      ),
    },
  ];

  const handleApprove = (record) => {
    showConfirmationModal('approve', record);
  };

  const handleReject = (record) => {
    showConfirmationModal('reject', record);
  };

  const showConfirmationModal = (action, record) => {
    Modal.confirm({
      title: `Are you sure you want to ${action} the loan for Order ID ${record.id}?`,
      icon: <ExclamationCircleOutlined />,
      onOk: () => {
        if (action === 'reject') {
          handleRejectAction(record);
        } else {
          message.success(`Loan for Order ID ${record.id} has been ${action}ed.`);
          localStorage.setItem("approve", a + 1);
          updateDataSource(record);
        }
      },
    });
  };

  const handleRejectAction = async (record) => {
    try {
      const token = localStorage.getItem('token');
      localStorage.setItem("reject", b + 1);
      await axios.delete(`http://localhost:8080/services/${record.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      message.success(`Loan application for Order ID ${record.id} has been rejected and deleted.`);
      updateDataSource(record);
    } catch (error) {
      console.error(`Error rejecting loan application: ${error.message}`);
    }
  };

  const updateDataSource = (record) => {
    const updatedDataSource = dataSource.filter((item) => item.id !== record.id);
    setDataSource(updatedDataSource);
  };

  const onSelectChange = (selectedKeys, selectedRows) => {
    setSelectedRowKeys(selectedKeys);
    setSelectedRows(selectedRows);
  };

  const clearSelection = () => {
    setSelectedRowKeys([]);
    setSelectedRows([]);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleBulkApprove = () => {
    message.success(`${selectedRows.length} loans have been approved.`);
    clearSelection();
  };

  const handleBulkReject = () => {
    message.success(`${selectedRows.length} loans have been rejected.`);
    clearSelection();
  };

  return (
    <div className='App1'>
      <NavBar1 />
      <div className="SideMenuAndPageContent">
        <Header />

        <div className="das">
          <Table
            columns={columns}
            dataSource={dataSource}
            pagination={false}
            rowKey={(record) => record.id}
            rowSelection={rowSelection}
            style={{ marginTop: '50px', width: '1000px' }}
          />
          {selectedRowKeys.length > 0 && (
            <div style={{ marginTop: 16 }}>
              <Button
                type="primary"
                onClick={handleBulkApprove}
                style={{ backgroundColor: 'green' }}
              >
                Bulk Approve
              </Button>
              <Button type="danger" onClick={handleBulkReject} style={{ marginLeft: 8 }}>
                Bulk Reject
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoanManagementTable;
