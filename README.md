# Recipe Search

## Heroku Link

https://meal-search.herokuapp.com/

## Linting
* app.py
    * invalid-envvar-default - Port has to be an integer
* models.py
    * missing-class-docstring - Model class is self explanatory
    * no-member - Members exist but are not recognized
    * consider-using-f-string - F string is not required
    * too-few-public methods - Class has only one public method
* routes.py
    * missing-function-docstring - Existing functions are self explanatory
    * no-member - Members exist but are not recognized

* Login.js
    * react/jsx-boolean-value - No reason to enforce this style for boolean attributes

* Login.js, Logout.js, refreshToken.js
    * no-alert - Alert is used
    * no-console - Console is used