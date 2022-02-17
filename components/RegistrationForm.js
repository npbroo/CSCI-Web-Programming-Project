import { Form, Input, Button, Checkbox } from 'antd';

export const RegistrationForm = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="grid grid-rows-1 mx-2">
            <span className=''>
                <span className="oswald text-xl">Register Account<br /></span>
                <span>
                    Just fill out the simple form below:
                </span>
            </span>


            <div className=''>
                <Form
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <div className="odyssey-bg px-5 pt-8 pb-1">
                        <Form.Item label="Username" name="username" rules={[{ required: true, message: 'Please input your username' }]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password" rules={[{ required: true, message: 'Please input your password' }]}>
                            <Input.Password />
                        </Form.Item>
                    </div>
                    <div className="mt-5 rounded-lg">
                        <Form.Item >
                            <button type="primary" htmlType="submit" className="flex odyssey-bg w-20 rounded">
                            <div className="m-auto">Submit</div>
                            </button>
                        </Form.Item>
                    </div>

                </Form>
            </div>


        </div>
    );

}