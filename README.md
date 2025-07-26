## Components Overview

### Input
- Takes the same properties as default HTML `<input>`
- If property `type="password"`:
- Displays a clickable icon to **show or hide** the input’s value
- If property `clearable` is passed:
- Displays a clickable “×” icon that **clears** the input’s value

### Toast
- Displays a toast message
- Available in three variants: `warning`, `success`, `primary`
- Works with the toast manager
- `App.tsx` includes controls to trigger each toast variant

### Sidebar
- Displays a sidebar sliding in from the **right**
- Controlled via a button in `App.tsx`
- Accepts nested items using a specific prop‑structure
- Every sidebar item is clickable
- Clicking the top‑right “×” icon or the dark overlay **closes** the sidebar

<img width="394" height="95" alt="input1" src="https://github.com/user-attachments/assets/ddf61dc2-826c-46c3-b29a-1c8625b6e849" />
<img width="380" height="83" alt="image" src="https://github.com/user-attachments/assets/9a410b3b-900d-47b4-9207-4251d9783d1f" />

<img width="757" height="747" alt="image" src="https://github.com/user-attachments/assets/5596ba7c-b6d4-4214-b8f6-2ae5fa1e3d1e" />
<img width="756" height="747" alt="image" src="https://github.com/user-attachments/assets/a53cb7f1-eb97-49cb-91c5-e58894a14e45" />

<img width="1920" height="886" alt="image" src="https://github.com/user-attachments/assets/66e9d0f3-e49b-4f59-b4b8-b0abc1fe7792" />
