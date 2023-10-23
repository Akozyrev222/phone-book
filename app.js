const todoInput = document.querySelector("input");
const todoCollection = document.querySelector(".todo-collection");
const groupsForm = document.querySelector(".groups-contacts_form");
const groupsButton = document.querySelector('.groups')
const addContactButton = document.querySelector('.add-contact')
const closeGroupsButton = document.getElementById('close-groups')
const closeContactsButton = document.getElementById('close-contacts')

const addGroup = document.getElementById('add-group')
const saveGroup = document.getElementById('save-group')
const saveContactButton = document.getElementById('save-contact')

const selectGroups = document.querySelector('.form-select')

const saveGroups = document.querySelector('.save')
const wrapper = document.querySelector('.wrapper')

groupsButton.addEventListener("click", openSidebarGroups);
addContactButton.addEventListener('click', openSidebarContacts)

closeGroupsButton.addEventListener("click", closeSidebarGroups);
closeContactsButton.addEventListener("click", closeSidebarContacts);

saveGroup.addEventListener("click", closeSidebarGroups)
addGroup.addEventListener('click', addNewGroup)

saveContactButton.addEventListener('submit', saveContact)
saveContactButton.addEventListener('submit', closeSidebarContacts)

let storeFromLocal = JSON.parse(localStorage.getItem("store") || "[]");
function getLocalStore() {
    if (storeFromLocal === []) {
        const divFriends = document.createElement("div")
        const label = document.createElement("label");
        const input = document.createElement('input')
        const divDelete = document.createElement('div')
        const divIcon = document.createElement('div')


        label.classList.add('input')
        divFriends.classList.add('friends')
        divDelete.classList.add('icon-delete')
        divIcon.classList.add('icon-svg')
        label.appendChild(input)
        divDelete.appendChild(divIcon)
        divFriends.appendChild(label)
        divFriends.appendChild(divDelete)

        groupsForm.appendChild(divFriends)

        divDelete.addEventListener("click", () => {
            setTimeout(() => {
                groupsForm.removeChild(divFriends);
            }, 100);
        });

        saveGroups.addEventListener("click", () => {
            setTimeout(() => {

            }, 100)
        })
    } else {
        storeFromLocal.forEach(item => {
            const divFriends = document.createElement("div")
            const label = document.createElement("label");
            const input = document.createElement('input');
            const divDelete = document.createElement('div')
            const divIcon = document.createElement('div')
            const option = document.createElement("option")
            const divGroupItem = document.createElement("div")
            const divTitleContainer = document.createElement("div");
            const spanTitle = document.createElement('span');
            const divCloseGroup = document.createElement('div')

            label.classList.add('input')
            divFriends.classList.add('friends')
            divDelete.classList.add('icon-delete')
            divIcon.classList.add('icon-svg')
            input.setAttribute('value', item.key)
            input.setAttribute('id', item.id)
            option.setAttribute('id', item.id)
            divFriends.setAttribute('id', item.id)
            divDelete.setAttribute('id', item.id)
            divGroupItem.setAttribute('id', item.id)
            option.innerText = item.key
            spanTitle.innerText = item.key

            divGroupItem.classList.add('group-items')
            divTitleContainer.classList.add('title-container')
            divTitleContainer.setAttribute('id', item.id)
            spanTitle.classList.add('title')
            divCloseGroup.classList.add('close-group')

            selectGroups.appendChild(option)
            label.appendChild(input)
            divDelete.appendChild(divIcon)
            divFriends.appendChild(label)
            divFriends.appendChild(divDelete)
            groupsForm.appendChild(divFriends)
            divGroupItem.appendChild(divTitleContainer)
            divTitleContainer.appendChild(spanTitle)
            divTitleContainer.appendChild(divCloseGroup)
            wrapper.appendChild(divGroupItem)


            item.values.forEach((el) => {
                createElement(el, divGroupItem, item)
            })

            divDelete.addEventListener("click", () => {
                setTimeout(() => {
                    groupsForm.removeChild(divFriends);
                    selectGroups.removeChild(option)
                    storeFromLocal = storeFromLocal.filter((group) => {
                        return group.id !== item.id
                    })
                    localStorage.setItem('store', JSON.stringify(storeFromLocal))
                }, 100);
            });
        })
    }
}
getLocalStore()
function updateStore(){
    const divButtonsSubmit = document.createElement('div')
    const addButton = document.createElement('button')
    const saveButton = document.createElement('button')

    divButtonsSubmit.classList.add('buttons-submit')

    addButton.classList.add('add')
    addButton.classList.add('button')
    addButton.setAttribute('id', 'add-group')

    saveButton.classList.add('add')
    saveButton.classList.add('button')
    saveButton.setAttribute('id', 'add-group')
    wrapper.innerText = ''
    groupsForm.innerText = ''
    getLocalStore()
}

function saveContact(e) {
    e.preventDefault();
    const id = e.target['group'].options[e.target['group'].options.selectedIndex].id

    const name = e.target['name'].value
    const phone = e.target['phone'].value

    const newContact = {
        id: Math.floor(Math.random() * 100),
        name,
        phone
    }
    const selectedGroup = storeFromLocal.find(e => e.id === id)
    const selectedGroupIndex = storeFromLocal.findIndex(e => e.id === id)
    const updatedValues = [...selectedGroup.values, newContact]
    storeFromLocal[selectedGroupIndex].values = updatedValues
    localStorage.setItem('store', JSON.stringify(storeFromLocal))
    updateStore()
}


function createElement(el, divGroupItem, item) {
    const ulListItems = document.createElement('ul')
    const liItemContainer = document.createElement('li')
    const formName = document.createElement('form')
    const formPhone = document.createElement('form')
    const labelName = document.createElement('label')
    const labelPhone = document.createElement('label')
    const inputName = document.createElement('input')
    const inputPhone = document.createElement('input')
    const divIconsContainer = document.createElement('div')
    const divIconEditItem = document.createElement('div')
    const divIconEditSvg = document.createElement('div')
    const divIconDeleteItem = document.createElement('div')
    const divIconDeleteSvg = document.createElement('div')
    const divIconSaveItem = document.createElement('div')
    const divIconSaveSvg = document.createElement('div')


    ulListItems.classList.add('list-items')
    liItemContainer.classList.add('item-container')
    formName.classList.add('name')
    formPhone.classList.add('phone')

    inputName.classList.add('input-item')
    inputPhone.classList.add('input-item')

    divIconsContainer.classList.add('icons-container')
    divIconEditItem.classList.add('icon-edit_item')
    divIconEditSvg.classList.add('icon-edit_svg')
    divIconDeleteItem.classList.add('icon-delete_item')
    divIconDeleteSvg.classList.add('icon-delete_svg')
    divIconSaveItem.classList.add('icon-save_item')
    divIconSaveSvg.classList.add('icon-save_svg')


    liItemContainer.setAttribute('id', el.id)
    inputName.value = el.name
    inputPhone.value = el.phone

    inputName.setAttribute('disabled', true)
    inputPhone.setAttribute('disabled', true)


    liItemContainer.appendChild(formName)
    liItemContainer.appendChild(formPhone)

    formName.appendChild(labelName)
    formPhone.appendChild(labelPhone)
    labelName.appendChild(inputName)
    labelPhone.appendChild(inputPhone)

    divGroupItem.appendChild(liItemContainer)
    liItemContainer.appendChild(divIconsContainer)
    divIconsContainer.appendChild(divIconEditItem)
    divIconsContainer.appendChild(divIconDeleteItem)
    divIconEditItem.appendChild(divIconEditSvg)
    divIconDeleteItem.appendChild(divIconDeleteSvg)
    divIconSaveItem.appendChild(divIconSaveSvg)

    wrapper.appendChild(divGroupItem)

    divIconEditItem.addEventListener("click", () => {
        inputName.removeAttribute('disabled')
        inputPhone.removeAttribute('disabled')
        divIconsContainer.removeChild(divIconEditItem)
        divIconsContainer.removeChild(divIconDeleteItem)
        divIconsContainer.appendChild(divIconSaveItem)
        divIconsContainer.appendChild(divIconDeleteItem)
    })
    const updatedGroup = storeFromLocal.find(e => e.id === item.id)
    const updatedGroupIndex = storeFromLocal.findIndex(e => e.id === item.id)
    const updatedItem = updatedGroup.values.find(e => e.id === el.id)
    divIconSaveItem.addEventListener('click', () => {
        const newItem = {
            ...updatedItem,
            name: inputName.value,
            phone: inputPhone.value
        }
        storeFromLocal[updatedGroupIndex].values = storeFromLocal[updatedGroupIndex].values.reduce((acc, elem) => {
            if (elem.id === updatedItem.id) {
                return [...acc, {...newItem}]
            }
            return [...acc, elem];
        }, [])
        inputName.setAttribute('disabled', true)
        inputPhone.setAttribute('disabled', true)

        divIconsContainer.removeChild(divIconSaveItem)
        divIconsContainer.removeChild(divIconDeleteItem)

        divIconsContainer.appendChild(divIconEditItem)
        divIconsContainer.appendChild(divIconDeleteItem)
        localStorage.setItem('store', JSON.stringify(storeFromLocal))
    })
    divIconDeleteItem.addEventListener('click', () => {
        console.log()
        storeFromLocal[updatedGroupIndex].values = storeFromLocal[updatedGroupIndex].values.filter((elem) => {
            return elem.id !== updatedItem.id
        })
        localStorage.setItem('store', JSON.stringify(storeFromLocal))
        divGroupItem.removeChild(liItemContainer)
    })
}

function addNewGroup() {
    const id = Math.floor(Math.random() * 200).toString()


    const divFriends = document.createElement("div")
    const label = document.createElement("label");
    const input = document.createElement('input')

    const divDelete = document.createElement('div')
    const divIcon = document.createElement('div')

    label.classList.add('input')
    divFriends.classList.add('friends')
    divDelete.classList.add('icon-delete')
    divIcon.classList.add('icon-svg')

    label.appendChild(input)
    divDelete.appendChild(divIcon)
    divFriends.appendChild(label)
    divFriends.appendChild(divDelete)
    divFriends.setAttribute('id', id)
    input.setAttribute('id', id)
    input.setAttribute('placeholder', 'Введите название')
    divDelete.setAttribute('id', id)

    groupsForm.appendChild(divFriends)


    divIcon.addEventListener("click", () => {
        setTimeout(() => {
            groupsForm.removeChild(divFriends);
        }, 100);
    });
    saveGroup.addEventListener('click', () => {
        setTimeout(() => {
            storeFromLocal = storeFromLocal.filter(group => group.id !== id)
            storeFromLocal = [...storeFromLocal, {
                id: id,
                key: input.value,
                values: []
            }]
            localStorage.setItem('store', JSON.stringify(storeFromLocal))
            updateStore()
        })
    })
}
function openSidebarGroups() {
    const mediaQueryMobile = window.matchMedia('(max-width: 500px)')
    const mediaQueryAdaptive = window.matchMedia('(max-width: 1000px)')
    if (mediaQueryMobile.matches) {
        document.getElementById("sidebar_groups").style.width = "100%";
    } else if (mediaQueryAdaptive.matches) {
        document.getElementById("sidebar_groups").style.width = "40%";
    } else {
        document.getElementById("sidebar_groups").style.width = "20%";
    }
}

function openSidebarContacts() {
    const mediaQueryMobile = window.matchMedia('(max-width: 500px)')
    const mediaQueryAdaptive = window.matchMedia('(max-width: 1000px)')
    if (mediaQueryMobile.matches) {
        document.getElementById("sidebar_contacts").style.width = "100%";
    } else if (mediaQueryAdaptive.matches) {
        document.getElementById("sidebar_contacts").style.width = "40%";
    } else {
        document.getElementById("sidebar_contacts").style.width = "20%";
    }
}

function closeSidebarGroups() {
    document.getElementById("sidebar_groups").style.width = "0";
    document.getElementById("sidebar_contacts").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
}

function closeSidebarContacts() {
    document.getElementById("sidebar_contacts").style.width = "0";
    //document.getElementById("main").style.marginLeft = "0";
}
