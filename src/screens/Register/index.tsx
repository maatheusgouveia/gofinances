import React, { useState } from "react";
import { Modal } from "react-native";

import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";

import {
	Container,
	Header,
	Title,
	Form,
	Fields,
	TransactionTypes,
} from "./styles";
import { CategorySelectButton } from "../../components/Form/CategorySelectButton";

import { CategorySelect } from "../CategorySelect";

export function Register() {
	const [transactionType, setTransactionType] = useState("");
	const [categoryModalOpen, setCategoryModalOpen] = useState(false);

	const [category, setCategory] = useState({
		key: "category",
		name: "Categoria",
	});

	function handleTransactionTypeSelect(type: "up" | "down") {
		setTransactionType(type);
	}

	function handleOpenSelectCategoryModal() {
		setCategoryModalOpen(true);
	}

	function handleCloseSelectCategoryModal() {
		setCategoryModalOpen(false);
	}

	return (
		<Container>
			<Header>
				<Title>Cadastro</Title>
			</Header>

			<Form>
				<Fields>
					<Input placeholder="Nome" />

					<Input placeholder="Preço" />

					<TransactionTypes>
						<TransactionTypeButton
							isActive={transactionType === "up"}
							type="up"
							title="Income"
							onPress={() => handleTransactionTypeSelect("up")}
						/>

						<TransactionTypeButton
							isActive={transactionType === "down"}
							type="down"
							title="Outcome"
							onPress={() => handleTransactionTypeSelect("down")}
						/>
					</TransactionTypes>

					<CategorySelectButton
						title={category.name}
						onPress={handleOpenSelectCategoryModal}
					/>
				</Fields>

				<Button onPress={() => {}} title="Enviar" />
			</Form>

			<Modal visible={categoryModalOpen}>
				<CategorySelect
					category={category}
					setCategory={setCategory}
					closeSelectCategory={handleCloseSelectCategoryModal}
				/>
			</Modal>
		</Container>
	);
}
