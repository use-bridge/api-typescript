# Reference

## Billing EstimateCharges

<details><summary><code>client.billing.estimateCharges.<a href="/src/api/resources/billing/resources/estimateCharges/client/Client.ts">listEstimateCharges</a>({ ...params }) -> BridgeApi.EstimateChargesListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.estimateCharges.listEstimateCharges();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.billing.EstimateChargesListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EstimateCharges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.estimateCharges.<a href="/src/api/resources/billing/resources/estimateCharges/client/Client.ts">createEstimateCharge</a>({ ...params }) -> BridgeApi.EstimateChargeCreateV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Conflicting EstimateCharge exists`
- `Missing Service Eligibility Amount`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.estimateCharges.createEstimateCharge({
    patientId: "patientId",
    serviceEligibilityId: "serviceEligibilityId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.EstimateChargeCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EstimateCharges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.estimateCharges.<a href="/src/api/resources/billing/resources/estimateCharges/client/Client.ts">authorizeStripeEstimateCharge</a>(id) -> BridgeApi.EstimateChargeAuthorizeStripeV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Invalid Estimate Charge Status`
- `Missing Customer`
- `Missing Customer Payment Method`
- `Payment Already Captured`
- `Payment has been Voided`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.estimateCharges.authorizeStripeEstimateCharge("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EstimateCharges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.estimateCharges.<a href="/src/api/resources/billing/resources/estimateCharges/client/Client.ts">captureStripeEstimateCharge</a>(id) -> BridgeApi.EstimateChargeCaptureStripeV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Invalid Estimate Charge Status`
- `Missing Customer`
- `Missing Customer Payment Method`
- `Payment Already Captured`
- `Payment has been Voided`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.estimateCharges.captureStripeEstimateCharge("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EstimateCharges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.estimateCharges.<a href="/src/api/resources/billing/resources/estimateCharges/client/Client.ts">refundStripeEstimateCharge</a>(id) -> BridgeApi.EstimateChargeRefundStripeV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Invalid Estimate Charge Status`
- `Missing Captured Transaction`
- `Missing Customer`
- `Missing Payment Intent`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.estimateCharges.refundStripeEstimateCharge("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EstimateCharges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.estimateCharges.<a href="/src/api/resources/billing/resources/estimateCharges/client/Client.ts">cancelStripeEstimateCharge</a>(id) -> BridgeApi.EstimateChargeCancelStripeV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Invalid Estimate Charge Status`
- `Missing Authorized Transaction`
- `Missing Customer`
- `Missing Payment Intent`
- `Payment Already Captured`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.estimateCharges.cancelStripeEstimateCharge("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `EstimateCharges.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing Fees

<details><summary><code>client.billing.fees.<a href="/src/api/resources/billing/resources/fees/client/Client.ts">listFees</a>({ ...params }) -> BridgeApi.FeesListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.fees.listFees();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.billing.FeesListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.fees.<a href="/src/api/resources/billing/resources/fees/client/Client.ts">createFee</a>({ ...params }) -> BridgeApi.FeeCreateV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Conflicting Fee exists`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.fees.createFee({
    patientId: "patientId",
    type: "LATE_CANCELLATION",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.FeeCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.fees.<a href="/src/api/resources/billing/resources/fees/client/Client.ts">captureStripeFee</a>(id) -> BridgeApi.FeeCaptureStripeV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Invalid Fee Status`
- `Missing Customer`
- `Missing Customer Payment Method`
- `Payment Already Captured`
- `Payment has been Voided`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.fees.captureStripeFee("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.billing.fees.<a href="/src/api/resources/billing/resources/fees/client/Client.ts">refundStripeFee</a>(id) -> BridgeApi.FeeRefundStripeV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

This endpoint may return a `409` error response with one of these public `message` values:

- `Invalid Fee Status`
- `Missing Captured Transaction`
- `Missing Customer`
- `Missing Payment Intent`
  </dd>
  </dl>
  </dd>
  </dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.fees.refundStripeFee("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Fees.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Billing SetupIntent

<details><summary><code>client.billing.setupIntent.<a href="/src/api/resources/billing/resources/setupIntent/client/Client.ts">createStripeSetupIntent</a>({ ...params }) -> BridgeApi.SetupIntentCreateStripeV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

This endpoint can only be used after setting up the billing integration. Refer to the [billing integration documentation](/documentation/integrations/billing/overview) for more details.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.billing.setupIntent.createStripeSetupIntent({
    patientId: "patientId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.SetupIntentCreateStripeV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `SetupIntent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ConsentVersions

<details><summary><code>client.consentVersions.<a href="/src/api/resources/consentVersions/client/Client.ts">listConsentVersions</a>({ ...params }) -> BridgeApi.ConsentVersionsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consentVersions.listConsentVersions();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ConsentVersionsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConsentVersions.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Consent

<details><summary><code>client.consent.<a href="/src/api/resources/consent/client/Client.ts">listPatientConsents</a>(id, { ...params }) -> BridgeApi.PatientConsentsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consent.listPatientConsents("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.PatientConsentsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Consent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.consent.<a href="/src/api/resources/consent/client/Client.ts">createPatientConsent</a>(id, { ...params }) -> BridgeApi.PatientConsentCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.consent.createPatientConsent("id", {
    type: "ASSIGNMENT_OF_BENEFITS",
    version: "version",
    consentedAt: "2024-01-15T09:30:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.PatientConsentCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Consent.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Events

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">listEvents</a>({ ...params }) -> BridgeApi.EventsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.listEvents();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.EventsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.events.<a href="/src/api/resources/events/client/Client.ts">getEvent</a>(id) -> BridgeApi.EventGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.events.getEvent("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Events.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Notes

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">createNote</a>({ ...params }) -> BridgeApi.NoteCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.createNote({
    serviceId: "serviceId",
    data: {},
    signature: {
        timestamp: "2024-01-15T09:30:00Z",
        providerId: "providerId",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.NoteCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">getNote</a>(id) -> BridgeApi.NoteGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.getNote("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">listNoteAddenda</a>(id, { ...params }) -> BridgeApi.NoteAddendaListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.listNoteAddenda("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.NoteAddendaListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.notes.<a href="/src/api/resources/notes/client/Client.ts">createNoteAddendum</a>(id, { ...params }) -> BridgeApi.NoteAddendumCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.notes.createNoteAddendum("id", {
    data: {},
    signature: {
        timestamp: "2024-01-15T09:30:00Z",
        providerId: "providerId",
    },
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.NoteAddendumCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Notes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PatientToken

<details><summary><code>client.patientToken.<a href="/src/api/resources/patientToken/client/Client.ts">createPatientToken</a>({ ...params }) -> BridgeApi.PatientTokenCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patientToken.createPatientToken({
    patientId: "patientId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PatientTokenCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PatientToken.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Patients

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">streamPatient</a>(id) -> core.Stream&lt;BridgeApi.PatientStreamV1Response&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.patients.streamPatient("id");
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">listPatients</a>({ ...params }) -> BridgeApi.PatientsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.listPatients();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PatientsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">updatePatient</a>(id, { ...params }) -> BridgeApi.PatientUpdateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.updatePatient("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.PatientUpdateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.<a href="/src/api/resources/patients/client/Client.ts">revalidatePatient</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.revalidatePatient("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Patients.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Patients V2

<details><summary><code>client.patients.v2.<a href="/src/api/resources/patients/resources/v2/client/Client.ts">createPatient</a>({ ...params }) -> BridgeApi.PatientCreateV2Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.v2.createPatient({
    firstName: "firstName",
    lastName: "lastName",
    email: "email",
    dateOfBirth: "2024-01-15T09:30:00Z",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PatientCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.patients.v2.<a href="/src/api/resources/patients/resources/v2/client/Client.ts">getPatient</a>(id) -> BridgeApi.PatientGetV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Resolves a Patient by either `id` or `externalId`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.patients.v2.getPatient("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PayerGroups

<details><summary><code>client.payerGroups.<a href="/src/api/resources/payerGroups/client/Client.ts">listPayerGroups</a>({ ...params }) -> BridgeApi.PayerGroupsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerGroups.listPayerGroups();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PayerGroupsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayerGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payerGroups.<a href="/src/api/resources/payerGroups/client/Client.ts">getPayerGroup</a>(id) -> BridgeApi.PayerGroupGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerGroups.getPayerGroup("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Payer group ID or slug (both are supported)

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `PayerGroups.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## PayerGroups Health

<details><summary><code>client.payerGroups.health.<a href="/src/api/resources/payerGroups/resources/health/client/Client.ts">listHealthEvents</a>(id, { ...params }) -> BridgeApi.HealthEventsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payerGroups.health.listHealthEvents("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string` — Payer group ID or slug (both are supported)

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.payerGroups.HealthEventsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Health.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payers

<details><summary><code>client.payers.<a href="/src/api/resources/payers/client/Client.ts">getPayer</a>(id) -> BridgeApi.PayerGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payers.getPayer("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Payments

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">listPayments</a>({ ...params }) -> BridgeApi.PaymentsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.listPayments();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PaymentsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">createPayment</a>({ ...params }) -> BridgeApi.PaymentCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.createPayment({
    serviceId: "serviceId",
    paidAt: "2024-01-15T09:30:00Z",
    transactionId: "transactionId",
    type: "PATIENT",
    amount: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PaymentCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.payments.<a href="/src/api/resources/payments/client/Client.ts">getPayment</a>(id) -> BridgeApi.PaymentGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.payments.getPayment("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Policies

<details><summary><code>client.policies.<a href="/src/api/resources/policies/client/Client.ts">getPolicy</a>(id) -> BridgeApi.PolicyGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.policies.getPolicy("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.policies.<a href="/src/api/resources/policies/client/Client.ts">revalidatePolicy</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.policies.revalidatePolicy("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.policies.<a href="/src/api/resources/policies/client/Client.ts">streamPolicy</a>(id) -> core.Stream&lt;BridgeApi.PolicyStreamV1Response&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.policies.streamPolicy("id");
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Policies.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Policies V2

<details><summary><code>client.policies.v2.<a href="/src/api/resources/policies/resources/v2/client/Client.ts">createPolicy</a>({ ...params }) -> BridgeApi.PolicyCreateV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a Policy, returning immediately with status of `PENDING`. Use the Get Policy API, or monitor webhooks, to receive updates.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.policies.v2.createPolicy({
    person: {
        firstName: "firstName",
        lastName: "lastName",
        dateOfBirth: "2024-01-15T09:30:00Z",
    },
    state: "AL",
    payerId: "payerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.PolicyCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ProviderEligibility

<details><summary><code>client.providerEligibility.<a href="/src/api/resources/providerEligibility/client/Client.ts">createProviderEligibility</a>({ ...params }) -> BridgeApi.ProviderEligibilityCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerEligibility.createProviderEligibility({
    dateOfService: "2024-01-15T09:30:00Z",
    serviceTypeId: "serviceTypeId",
    location: {
        state: "AL",
    },
    payerId: "payerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ProviderEligibilityCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providerEligibility.<a href="/src/api/resources/providerEligibility/client/Client.ts">getProviderEligibility</a>(id) -> BridgeApi.ProviderEligibilityGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providerEligibility.getProviderEligibility("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ProviderEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Providers

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">submitProviders</a>({ ...params }) -> BridgeApi.ProviderPostV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Submits one or more providers for credentialing intake. In live environments, this starts the provider submission workflow and resolves provider names from the CMS NPI Registry. In sandbox, the endpoint is available with the same request and response shape, but providers are created immediately without an external NPI registry lookup; created providers use firstName `Sandbox` and lastName set to the submitted NPI.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.submitProviders({
    providers: [
        {
            npi: "npi",
            email: "email",
            caqhId: "caqhId",
            caqhUsername: "caqhUsername",
            caqhPassword: "caqhPassword",
        },
        {
            npi: "npi",
            email: "email",
            caqhId: "caqhId",
            caqhUsername: "caqhUsername",
            caqhPassword: "caqhPassword",
        },
    ],
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ProviderPostV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">listProviders</a>({ ...params }) -> BridgeApi.ProvidersListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.listProviders();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ProvidersListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">getProvider</a>(id) -> BridgeApi.ProviderGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.getProvider("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.providers.<a href="/src/api/resources/providers/client/Client.ts">updateProvider</a>(id, { ...params }) -> BridgeApi.ProviderUpdateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.updateProvider("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.ProviderUpdateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Providers.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Providers Enrollment

<details><summary><code>client.providers.enrollment.<a href="/src/api/resources/providers/resources/enrollment/client/Client.ts">getProviderEnrollmentStatus</a>(id) -> BridgeApi.ProviderEnrollmentStatusGetV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Returns the high-level enrollment status of a provider

**Production only:** This endpoint is only available in Production and will not work in Sandbox.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.providers.enrollment.getProviderEnrollmentStatus("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Enrollment.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Search

<details><summary><code>client.search.<a href="/src/api/resources/search/client/Client.ts">payerSearch</a>({ ...params }) -> BridgeApi.SearchPayerV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.search.payerSearch({
    query: "query",
    limit: 1,
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.SearchPayerV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Search.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceEligibility

<details><summary><code>client.serviceEligibility.<a href="/src/api/resources/serviceEligibility/client/Client.ts">streamServiceEligibility</a>(id) -> core.Stream&lt;BridgeApi.ServiceEligibilityStreamV1Response&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.serviceEligibility.streamServiceEligibility("id");
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.serviceEligibility.<a href="/src/api/resources/serviceEligibility/client/Client.ts">getServiceEligibility</a>(id) -> BridgeApi.ServiceEligibilityGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceEligibility.getServiceEligibility("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceEligibility.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceEligibility V2

<details><summary><code>client.serviceEligibility.v2.<a href="/src/api/resources/serviceEligibility/resources/v2/client/Client.ts">createServiceEligibility</a>({ ...params }) -> BridgeApi.ServiceEligibilityCreateV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a ServiceEligibility, returns immediately in the `PENDING` status.

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceEligibility.v2.createServiceEligibility({
    serviceTypeId: "serviceTypeId",
    dateOfService: "2024-01-15T09:30:00Z",
    state: "AL",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceEligibilityCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## ServiceTypes

<details><summary><code>client.serviceTypes.<a href="/src/api/resources/serviceTypes/client/Client.ts">listServiceTypes</a>({ ...params }) -> BridgeApi.ServiceTypesListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceTypes.listServiceTypes();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceTypesListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.serviceTypes.<a href="/src/api/resources/serviceTypes/client/Client.ts">getServiceType</a>(id) -> BridgeApi.ServiceTypeGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.serviceTypes.getServiceType("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ServiceTypes.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Services

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">streamService</a>(id) -> core.Stream&lt;BridgeApi.ServiceStreamV1Response&gt;</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
const response = await client.services.streamService("id");
for await (const item of response) {
    console.log(item);
}
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">listServices</a>({ ...params }) -> BridgeApi.ServicesListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.listServices();
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServicesListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">createService</a>({ ...params }) -> BridgeApi.ServiceCreateV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.createService({
    patientId: "patientId",
    dateOfService: "2024-01-15T09:30:00Z",
    serviceTypeId: "serviceTypeId",
    location: {
        state: "AL",
    },
    providerId: "providerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceCreateV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">getService</a>(id) -> BridgeApi.ServiceGetV1Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Fetch a Service by `id` or `externalId`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.getService("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">revalidateService</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.revalidateService("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">billService</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.billService("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">getServiceNote</a>(id) -> BridgeApi.ServiceNoteGetV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.getServiceNote("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.<a href="/src/api/resources/services/client/Client.ts">deleteServiceNote</a>(id) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.deleteServiceNote("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Services.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Services Payments

<details><summary><code>client.services.payments.<a href="/src/api/resources/services/resources/payments/client/Client.ts">listServicePayments</a>(id, { ...params }) -> BridgeApi.ServicePaymentsListV1Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.payments.listServicePayments("id");
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.services.ServicePaymentsListV1Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `Payments.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

## Services V2

<details><summary><code>client.services.v2.<a href="/src/api/resources/services/resources/v2/client/Client.ts">createService</a>({ ...params }) -> BridgeApi.ServiceCreateV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Creates a new `Service`, creates the `ServiceEligibility` in status `PENDING`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.v2.createService({
    patientId: "patientId",
    dateOfService: "2024-01-15T09:30:00Z",
    serviceTypeId: "serviceTypeId",
    location: {
        state: "AL",
    },
    providerId: "providerId",
});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `BridgeApi.ServiceCreateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.v2.<a href="/src/api/resources/services/resources/v2/client/Client.ts">cancelService</a>(id, { ...params }) -> BridgeApi.ServiceCancelV2Response</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.v2.cancelService("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.ServiceCancelV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>

<details><summary><code>client.services.v2.<a href="/src/api/resources/services/resources/v2/client/Client.ts">updateService</a>(id, { ...params }) -> BridgeApi.ServiceUpdateV2Response</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Updates an existing `Service`

</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.services.v2.updateService("id", {});
```

</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**id:** `string`

</dd>
</dl>

<dl>
<dd>

**request:** `BridgeApi.ServiceUpdateV2Request`

</dd>
</dl>

<dl>
<dd>

**requestOptions:** `V2.RequestOptions`

</dd>
</dl>
</dd>
</dl>

</dd>
</dl>
</details>
