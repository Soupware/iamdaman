### I am the Maaaaaan~! ###
--------------------------------------------------------------------------------
#### Folder Structure ####
    GravFree
     |-- Assets
     |    |-- Resources
     |    |    |-- _Scenes
	 |    |    |-- Audio
     |    |    |-- Materials
     |    |    |-- Prefabs
     |    |    |-- Scripts
     |    |    |-- Shaders
     |    |    +-- Textures
     |    |
     |    |-- Plugins
     |    |-- Standard Assets
     |    +-- Standard Assets (Mobile)
     |
     |-- Library
     +-- ProjectSettings

#### File Naming Conventions ####
All files that will be included in this repository must be named using the
following format:

    type_id_name_[ver]	// i.e. pre_all_Player_1

type:

	aud - Audio
    sne - Scene
	mat - Material
	pre - Prefab
	scr - Script
	sha - Shader
	tex - Texture
id:

	all - general resource; used by many components
	l** - level-specific resource (** is the level number, i.e. l01 -> Level 1)
	del - resource marked for deletion in the future

**name** must be short, descriptive and written in CamelCaps. **ver** is an optional
field, but it must be defined in the case of multiple copies or versions of the
same file. **ver** should either be a decimal number, or the word *tmp* (to
indicate that the resource is just a placeholder and will be *replaced* in the
future).

#### Script Conventions ####
Functions
* They must be written in CamelCaps
* The name of the function must be a verb phrase:

		function doSomething()
* The parameters must be strongly typed (see Variables)
* Code blocks should always be enclosed in curly braces, even if it's just one
  line
* Conserve both vertical and horizonal space:

		function checkStatus() {
			if (_canFire) {
				return true;
			} else {
				return false;
			}
		}

Variables
* They must be written in camelCase 
* They must be strongly typed (and downcast as much as possible):

		var myComponent: Component;
		// ArrowVector is a kind of Component
		var arrowComponent : ArrowVector = myComponent as ArrowVector;
* Use a letter for counters (except for p, r, s, x, y, and z)
* boolean variables must be prefixed by a linking verb:

		var isSingle : boolean = true;
		var doSpawn : boolean = false;
* variables declared outside of a function must have its scope declared
* private variables must be prefixed by an underscore.

#### Notes ####
It is recommended to use some frontend for Git (such as GitHub for Windows).
Texture resolutions must always be powers of two. (i.e. 128px x 128px)

--------------------------------------------------------------------------------
Readme v1.0, Created on 01/16/2013
v.1.1 Modified on 01/17/2013
 - [Variables] Added space before the colon for variable declaration

&copy; 2012, 2013 Soupware