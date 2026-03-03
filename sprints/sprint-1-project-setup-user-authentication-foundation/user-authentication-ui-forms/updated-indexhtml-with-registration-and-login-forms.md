```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pomodoro App</title>
    <!-- Link to our main stylesheet -->
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <!-- The root element where our JavaScript application will render content -->
    <div id="app-root">
        <!-- Application Title -->
        <h1 class="app-title">Pomodoro App</h1>
        
        <!-- Authentication Container -->
        <!-- This container will hold either the login or registration form, managed by JavaScript -->
        <div id="auth-container">
            <!-- Login Form (initially active) -->
            <form id="login-form" class="auth-form active">
                <h2 class="form-title">Login to your account</h2>
                <div class="form-group">
                    <label for="login-email">Email or Username</label>
                    <input type="text" id="login-email" name="emailOrUsername" required autocomplete="username">
                </div>
                <div class="form-group">
                    <label for="login-password">Password</label>
                    <input type="password" id="login-password" name="password" required autocomplete="current-password">
                </div>
                <button type="submit" class="btn primary-btn">Login</button>
                <p class="form-switch-text">Don't have an account? <a href="#" id="show-register">Register here</a></p>
            </form>

            <!-- Registration Form (initially hidden) -->
            <form id="register-form" class="auth-form hidden">
                <h2 class="form-title">Create a new account</h2>
                <div class="form-group">
                    <label for="register-username">Username</label>
                    <input type="text" id="register-username" name="username" required autocomplete="new-username">
                </div>
                <div class="form-group">
                    <label for="register-email">Email</label>
                    <input type="email" id="register-email" name="email" required autocomplete="email">
                </div>
                <div class="form-group">
                    <label for="register-password">Password</label>
                    <input type="password" id="register-password" name="password" required autocomplete="new-password">
                </div>
                <div class="form-group">
                    <label for="register-confirm-password">Confirm Password</label>
                    <input type="password" id="register-confirm-password" name="confirmPassword" required autocomplete="new-password">
                </div>
                <button type="submit" class="btn primary-btn">Register</button>
                <p class="form-switch-text">Already have an account? <a href="#" id="show-login">Login here</a></p>
            </form>
        </div>
    </div>

    <!-- Defer script loading to ensure DOM is ready -->
    <script src="app.js" defer></script>
</body>
</html>
```