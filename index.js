const btnsContainer = document.querySelector('.btns-container');
const modalComponent = ` <div class="modal absolute  bg-bg_modal top-0 left-0 w-screen h-screen justify-center items-center ">
<div class="modal-window bg-white  rounded w-3/4 p-5 m-auto" style="transform: translateY(50%);  ">
    <svg class="w-6 h-6 modal-window-close-btn  hover:fill-blue-500 hover:cursor-pointer ml-auto " fill="none"
        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
    </svg>
    <h5> Modal Pop up window</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos rerum ipsum at dicta, cum explicabo. Enim
        eos quae aut soluta. </p>
</div>

</div>`;

const insertBtns = () => {
	for (let index = 0; index < 3; index++) {
		btnsContainer.insertAdjacentHTML(
			'beforeend',
			'<button class="bg-white px-3 rounded-md py-2 btn-modal">Fire Modal</button>'
		);
	}
};
document.body.addEventListener('keydown', (e) => {
	const modal = document.querySelector('.modal');

	e.keyCode === 27 && modal !== null && closeModal();
});
insertBtns();
const modalBtn = document.querySelectorAll('.btn-modal');
let closeModalBtn = '';

const closeModal = () => {
	document.body.removeChild(document.querySelector('.modal'));
};

const insertModal = () => {
	document.body.insertAdjacentHTML('afterbegin', modalComponent);
	closeModalBtn = document.querySelector('.modal-window-close-btn');
	closeModalBtn.addEventListener('click', closeModal);
};

modalBtn.forEach((button) => {
	button.addEventListener('click', insertModal);
});
