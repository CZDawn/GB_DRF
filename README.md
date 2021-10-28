# GB_DRF 
This is the repo for improving my programming scills, in particular to study Django REST Framework.

1. To manage with dynaconf do next steps (Linux):
   # Installation
     ```bash
     pip install dynaconf
     ```
   # Create a file with secrets in the root of the local folder with project
     ```bash
     touch .secrets.yaml
     ```
     * This file should be in .gitignore !!!
   # Create a file with settings in the root of thhe project (if it's absent)
     ```bash
     touch settings.yaml
     ```
   # Add next code in settings.yaml (if this file was created by yourself)
     ```yaml
     default:
         DEBUG: ""
         SECRET_KEY: ""
     development:
         DEBUG: True
         SECRET_KEY: "xxx"
     production:
         DEBUG: False
         SECRET_KEY: "xxx"
     ```
     * Do not forget add new settings not only in development or production sections, but in default section to.
   # Add next code in .secrets.yaml
     ```yaml
     development:
         SECRET_KEY: "xxx"    # add instead "xxx" your own secret key from django project settings
     production:
         SECRET_KEY: "xxx"    # add instead "xxx" your own secret key from django project settings
     ```
     * You can add your own extra secrets wich do you need to this file and make corresponding changes in the settings.yaml file.
     
