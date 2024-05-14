import { Input, Checkbox, Button, Form } from "antd";
import { useForm } from "antd/es/form/Form";
import { Status, StatusSetter } from "../status";

const SignUpForm = ({ setStatus }: StatusSetter) => {
  const [form] = useForm();

  const onSignUp = async () => {
    const values = await form.validateFields();
    if (values) {
      setStatus(Status.Login);
    }
  };

  return (
    <div style={{ width: 400 }}>
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">Sign Up for an Account</h1>
        <p className="text-gray-500">
          Let's get your all set up so you can creating your first onboarding
          experience.
        </p>
      </div>
      <Form
        form={form}
        layout="vertical"
      >
        <div className="flex gap-4">
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
            className="flex-grow"
          >
            <Input placeholder="First name"></Input>
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
            className="flex-grow"
          >
            <Input placeholder="Last name"></Input>
          </Form.Item>
        </div>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
            },
          ]}
        >
          <Input placeholder="Enter your email address" />
        </Form.Item>
        <Form.Item
          label="Password"
          required
          name="password"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input placeholder="Enter yout password" />
        </Form.Item>
        <Form.Item>
          <Form.Item
            noStyle
            name="remember"
            valuePropName="checked"
          >
            <Checkbox>
              I accept BoardMe's
              <span className="text-primary ml-1">Terms & Conditions</span>
            </Checkbox>
          </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            onClick={() => onSignUp()}
            type="primary"
            block
          >
            SIGN UP
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpForm;
