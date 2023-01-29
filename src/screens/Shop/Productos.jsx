import { CalendarIcon, MapPinIcon, UsersIcon } from '@heroicons/react/20/solid';
import {
	CurrencyEuroIcon,
	InformationCircleIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import Alerta from '../../components/Notification/Alerta';

const positions = [
	{
		id: 1,
		title: 'Tortilla 9 cm',
		stock: true,
		description: 'Tortilla de 9 cm',
		price: 4.25,
	},
	{
		id: 2,
		title: 'Tortilla 12 cm',
		stock: false,
		description: 'Tortilla de 12 cm',
		price: 6.5,
	},
	{
		id: 3,
		title: 'Tortilla 15 cm',
		stock: true,
		description: 'Tortilla de 15 cm',
		price: 8,
	},
];

export default function Productos() {
	const [show, setShow] = useState(false);

	const activeAlert = (estado) => {
		setShow(estado);
		setTimeout(() => {
			setShow(false);
		}, 800);
	};

	return (
		<div className='overflow-hidden bg-white shadow sm:rounded-md'>
			<ul role='list' className='divide-y divide-gray-200'>
				{positions.map((position) => (
					<li key={position.id}>
						<div className='block hover:bg-gray-50'>
							<div className='px-4 py-4 sm:px-6'>
								<div className='flex items-center justify-between'>
									<p className='truncate text-sm font-medium text-red-600'>
										{position.title}
									</p>
									<div className='ml-2 flex flex-shrink-0'>
										{position.stock ? (
											<p className='inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800'>
												Disponible
											</p>
										) : (
											<p className='inline-flex rounded-full bg-red-100 px-2 text-xs font-semibold leading-5 text-red-800'>
												Agotado
											</p>
										)}
									</div>
								</div>
								<div className='mt-2 sm:flex sm:justify-between'>
									<div className='sm:flex'>
										<p className='flex items-center text-sm text-gray-500'>
											<CurrencyEuroIcon
												className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
												aria-hidden='true'
											/>
											{position.price} €
										</p>
										<p className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6'>
											<InformationCircleIcon
												className='mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400'
												aria-hidden='true'
											/>
											{position.description}
										</p>
									</div>
									<div className='mt-2 flex items-center text-sm text-gray-500 sm:mt-0'>
										<button
											onClick={() => {
												activeAlert(true);
											}}
											type='button'
											className='inline-flex items-center rounded border border-transparent bg-blue-600 px-2.5 py-1.5 text-xs font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
											Añadir al pedido
										</button>
									</div>
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			<Alerta show={show} setShow={setShow} />
		</div>
	);
}
