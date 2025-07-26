Run project:
  -npm i
  -npm start
Components overview:
  Input
    -Takes the same properties as default html input
    -If property "type" is password, it will display a clickable icon which shows or hides input's value
    -If property "clearable" is passed, will display a clickable cross icon which sets input's value to an empty string
  Toast
    -Displays a toast message
    -Can be in 3 variants: warning, success, primary
    -Works with the toast manager
    -App.tsx contains controls to display a toast
  Sidebar
    -Displays a sidebar, which appears from the right side of the screen if the property is passed
    -App.tsx contains a button to display sidebar
    -Sidebar can render nested items with specific structure. Example of the sctructure is already passed through props
    -Every sidebar item is clickable
    -clicking the top right cross or dark section closes the sidebar
Screnshots

<img width="394" height="95" alt="input1" src="https://github.com/user-attachments/assets/ddf61dc2-826c-46c3-b29a-1c8625b6e849" />
<img width="380" height="83" alt="image" src="https://github.com/user-attachments/assets/9a410b3b-900d-47b4-9207-4251d9783d1f" />

<img width="757" height="747" alt="image" src="https://github.com/user-attachments/assets/5596ba7c-b6d4-4214-b8f6-2ae5fa1e3d1e" />
<img width="756" height="747" alt="image" src="https://github.com/user-attachments/assets/a53cb7f1-eb97-49cb-91c5-e58894a14e45" />

<img width="1920" height="886" alt="image" src="https://github.com/user-attachments/assets/66e9d0f3-e49b-4f59-b4b8-b0abc1fe7792" />
