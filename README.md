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
     ```diff
     - !!! This file should be in the .gitignore file !!!
     ```
   # Create a file with settings in the root of the project (if it's absent)
     ```bash
     touch settings.yaml
     ```
   # Create a file with managing secrets settings for dynaconf in the root of the local folder with project
     ```bash
     touch .env
     ```
     ```diff
     - !!! This file should be in the .gitignore file !!!
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
     * Do not forget add new settings not only in development or production sections, but in the default section to.
   # Add next code in .secrets.yaml
     ```yaml
     development:
         SECRET_KEY: "xxx"    # add instead "xxx" your own secret key from django project settings
     production:
         SECRET_KEY: "xxx"    # add instead "xxx" your own secret key from django project settings
     ```
     * You can add your own extra secrets wich do you need to this file and make corresponding changes in the settings.yaml file.
   # Add next code in .env
     ```
     CORE_LOADERS_FOR_DYNACONF=["YAML"]
     ENVVAR_PREFIX_FOR_DYNACONF=XXX    # add here your own prefix to avoid random redefinition of variables
     YAML_LOADER_FOR_DYNACONF=safe_load
     ENV_FOR_DYNACONF=development      # change for 'production' if it's ready and your finished develop process
     ```

     
