import { RememberUserStorageKey } from "@/config/storageKey";
import { Input, Checkbox, Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import { Channels } from "./channel";
import { useTranslation } from "react-i18next";
import { useAuth } from "@/hooks/useAuth";
import { useLocalStorageState } from "ahooks";

const LoginForm = () => {
  const [form] = Form.useForm();

  const { setIsLogin } = useAuth();

  const [_, setRemember] = useLocalStorageState(RememberUserStorageKey);

  const navigate = useNavigate();

  const onLogin = async () => {
    const values = await form.validateFields();
    if (values) {
      if (values.remember) {
        setRemember(values.remember);
      }
      setIsLogin(true);
      navigate("/dashboard");
    }
  };

  const { t } = useTranslation();

  return (
    <div className="pc:w-[400px] w-full">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">{t("nkDOyr6cZK94WfDlVQac3")}</h1>
        <p className="text-gray-500 mt-4">{t("i44sySLpmnjLPmH7hap8G")}</p>
      </div>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          email: "React@react.com",
          password: "React",
        }}
      >
        <Form.Item
          label={t("u1BdEhrFoCevJQb1BS83P")}
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
          label={t("ISnrUm0heWGsPm3ZP66f7")}
          name="password"
          rules={[{ required: true }]}
        >
          <Input.Password placeholder="Enter yout password" />
        </Form.Item>

        <Form.Item>
          <Form.Item noStyle name="remember" valuePropName="checked">
            <Checkbox>{t("iDcdFRtkq7nT-BdoHkp4I")}</Checkbox>
          </Form.Item>
          <a href="#" className="float-right">
            {t("iLO0Si0mxlgDQTQa9aUoK")}
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" block onClick={() => onLogin()}>
            {t("a_ZCseNIXj9Trqyr62EtL")}
          </Button>
        </Form.Item>
        <Form.Item>
          <div className="text-center">
            <p className="text-base text-gray-400">
              {t("Q5mJjhJ8ABicCJuHV-_dw")}
            </p>
            <div className="flex gap-4 px-8 justify-around mt-2">
              {Channels.map((item) => (
                <div
                  className="py-1 px-6 border border-solid border-gray-200 rounded text-xl cursor-pointer hover:shadow"
                  key={item.desc}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
