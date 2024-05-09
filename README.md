# Svelte Alerts

A complete alert and warning package in svelte.

## Features

- Light/dark alert
- Success alert
- Warn alert
- Error alert
- Info alert

## Installation

Install into the project using npm

```bash
  npm install @pedrofreit4s/avelte-alerts
```

Install into the project using yarn

```bash
  yarn add @pedrofreit4s/avelte-alerts
```

## Usage

First, index this link as icon dependency in font

```html
<link
  href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
  rel="stylesheet"
/>
```

Add the provider to your application's global layout file `+layout.svelte`or another file

```jsx
<AlertProvider options={{...}} />
```

Customization options

- `mode: "auto"` Color mode, automatic light and dark
- `success_icon: "bx bx-check-circle"` Success icon. More Icons [https://boxicons.com/](https://boxicons.com/)
- `warn_icon: "bx bx-error"` Warn icon. More Icons [https://boxicons.com/](https://boxicons.com/)
- `error_icon: "bx bx-bug-alt"` Error icon. More Icons [https://boxicons.com/](https://boxicons.com/)
- `info_icon: "bx bx-info-circle"` Info icon. More Icons [https://boxicons.com/](https://boxicons.com/)

To add an alert

```ts
import { alert } from "@pedrofreit4s/svelte-alert";

function showAlert() {
  // params[0] = "success" | "warn" | "error" | "info"
  // params[1] = Message
  // params[2] = Hidden time in ms
  const alertId = alert.push(
    "success",
    "Your username has been successfully activated!",
    1500
  );
}
```

To remove an alert

```ts
import { alert } from "@pedrofreit4s/svelte-alert";

function removeAlert(alertId: string) {
  alert.remove(alertId);
}
```

## Authors

- [@pedrofreit4s](https://www.github.com/pedrofreit4s)
